export const getOrgById = (store, id) =>
getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {}