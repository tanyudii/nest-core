import { FindOneQueryDto } from '../dtos/find-one-query.dto';

export const buildFindOnePayload = (query: FindOneQueryDto, params = {}) => {
  const {
    relations,
    using,
    with_deleted,
  } = query;

  return Object.assign(params, {
    relations,
    using,
    with_deleted:
      with_deleted === undefined ? undefined : ['true', '1'].includes(with_deleted.toLowerCase()),
  });
};
