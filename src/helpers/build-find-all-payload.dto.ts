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

  const perPageValue = parseInt(per_page);
  const pageValue = parseInt(page);

  Object.assign(params, {
    search,
    relations,
    per_page: isNaN(perPageValue) ? undefined : perPageValue,
    page: isNaN(pageValue) ? undefined : pageValue,
    order_by,
    sorted_by,
    using,
    with_deleted:
      with_deleted === undefined ? undefined : ['true', '1'].includes(with_deleted.toLowerCase()),
  });

  return params;
};
