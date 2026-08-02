import { IsString, IsNotEmpty, IsNumber, Min, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CrearPedidoDto {
  @ApiProperty({
    description: 'Identificador único del cliente para sumar puntos de lealtad',
    example: 'CLI-233286',
  })
  @IsString()
  @IsNotEmpty()
  idCliente!: string;

  @ApiProperty({
    description: 'Lista de identificadores de los artículos del pedido',
    example: ['ART-001', 'ART-002'],
  })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  articulosId!: string[];

  @ApiProperty({
    description: 'Monto total del pedido',
    example: 250.5,
    minimum: 1,
  })
  @IsNumber()
  @Min(1)
  montoTotal!: number;
}
