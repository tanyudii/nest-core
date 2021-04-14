import { FindOneOptions } from 'typeorm';
import { BuildFindOneOptionInterface } from '../interfaces';

export const buildFindOneQueryOption = ({
  options,
  cacheable = false,
}: BuildFindOneOptionInterface): FindOneOptions => {
  const { id, relations = [], with_deleted: withDeleted = false } = options;

  return {
    where: {
      id: id,
    },
    cache: cacheable,
    relations: relations,
    withDeleted,
  };
};
