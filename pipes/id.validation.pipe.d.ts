import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class idValidationPipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata): string;
}
