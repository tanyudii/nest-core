import { FindAllQueryDto } from '../dtos/find-all-query.dto';

export const buildFindAllPayload = (query: FindAllQueryDto, params = {}) => {
  const {
    search,
    relations,
    per_page,
    page,
    order_by,
    sorted_by,
    using,
    with_deleted,
  } = query;

  return Object.assign(params, {
    search,
    relations,
    per_page: Number(per_page),
    page: Number(page),
    order_by,
    sorted_by,
    using,
    with_deleted:
      with_deleted === undefined ? undefined : Boolean(with_deleted),
  });
};
