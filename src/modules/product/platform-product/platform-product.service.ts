import { HelpersService } from './../../../helpers/helpers.service';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatApiService } from 'src/stat-api/stat-api.service';
import { Repository } from 'typeorm';
import { CreatePlatformProductDto, UpdatePlatformProductDto } from './platform-product.dto';
import { PlatformProduct } from './platform-product.entity';

@Injectable()
export class PlatformProductService {
  @Inject(StatApiService)
  private readonly statApi: StatApiService;

  constructor(
    @InjectRepository(PlatformProduct) private readonly platformProductRepository: Repository<PlatformProduct>,
    private readonly helpersService: HelpersService,
  ) {}

  async getAll(): Promise<PlatformProduct[]> {
    return await this.platformProductRepository.find();
  }

  async update(id: number, updateDto: UpdatePlatformProductDto): Promise<void> {
    console.log(id, updateDto);
    const oldProduct = await this.platformProductRepository.findBy({ platformProductId: id });

    if (!oldProduct) {
      throw new NotFoundException('Platform product not found');
    }
    console.log(oldProduct);
    await this.platformProductRepository.update({ platformProductId: id }, updateDto);
  }

  async create(createDto: CreatePlatformProductDto): Promise<number> {
    const newProduct = this.platformProductRepository.create(createDto);

    return newProduct.platformProductId;
  }

  async getProductsForTopbar([platformProducts, statProducts, dashboardProducts, userId, accountId]) {
    const userACL = { contractId: ['roleId'] };
    const statServices = await this.statApi.exec<string[]>('get', 'internal/uu/get-service-types-by-contract', {
      contract_id: [accountId],
    });

    const res = platformProducts.reduce((acc, product): TopbarProduct[] => {
      const isDisplayed: boolean = this.helpersService.checkVisibility(product.topbarVisibility, contractId);

      if (!isDisplayed) return acc;

      const statProduct = statProducts.find((item) => item.statProductId === product.statProductId);

      if (statProduct.roles) {
        statProduct.roles.forEach((role) => {
          const isEnabled = statServices.includes(product.statProductId);

          const hasRoles = userACL.includes(role);

          if (isEnabled && hasRoles) {
            acc.push({
              id: product.statProductId,
              name: product.name,
              link: product.link,
              weight: product.weight,
            });
          }
        });
      }
    }, []);
    return [];
  }
}
