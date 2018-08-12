
export const initialState = {
  processing: false,
  all: null,
  error: null
};

export const getAll = state => state.users.all;
export const getProcessing = state => state.users.processing;
