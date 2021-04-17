import { FindAllDto } from '../../dtos';
import { Brackets } from 'typeorm';

export const buildFindAllQueryBuilder = (builder: any, options: FindAllDto) => {
  const {
    id,
    ids,
    page,
    per_page: perPage,
    order_by: orderBy,
    sorted_by: sortedBy,
    with_deleted: withDeleted,
  } = options;

  const entityIds = id === undefined ? [] : [id];
  if (ids !== undefined) {
    entityIds.push(...ids);
  }

  if (entityIds.length) {
    builder.where(
      new Brackets((qb) => {
        qb.whereInIds(entityIds);
      }),
    );
  }

  if (perPage !== undefined) {
    builder.take(perPage).skip(page > 1 ? perPage * (page - 1) : 0);
  }

  if (orderBy !== undefined) {
    builder.orderBy({
      [orderBy]:
        sortedBy !== undefined && sortedBy.toLowerCase() === 'desc'
          ? 'DESC'
          : 'ASC',
    });
  }

  if (withDeleted) {
    builder.withDeleted();
  }

  return builder;
}
