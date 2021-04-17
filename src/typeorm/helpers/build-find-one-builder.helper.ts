import { FindOneDto } from '../../dtos';

export const buildFindOneQueryBuilder = (builder: any, options: FindOneDto) => {
  const {id, with_deleted: withDeleted} = options;

  builder.whereInIds([id])

  if (withDeleted) {
    builder.withDeleted();
  }

  return builder;
};
