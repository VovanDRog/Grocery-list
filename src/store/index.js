import { createStore } from "redux";
import { loadState, saveState } from "./localStorage";
import rootReducer from "./reducers";

const getStoreName = () => "groceries";

function configureStore() {
  const persistedState = loadState(getStoreName());

  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(
    throttle(() => {
      saveState(
        {
          groceries: store.getState().groceries,
        },
        getStoreName()
      );
    }, 1000)
  );

  return store;
}

function throttle(func, delay) {
  let timeout = null;
  return function (...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        func.call(this, ...args);
        timeout = null;
      }, delay);
    }
  };
}

export default configureStore();
