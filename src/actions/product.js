import * as ActionTypes from './types'
import productSvc from '../svc/product'

const onProductLoadItems = () => async (dispatch) => {
  dispatch({type: ActionTypes.PRODUCT_LIST.LOADING})
  try {
    const items = await productSvc.list()
    dispatch({type: ActionTypes.PRODUCT_LIST.LOADED, items})
  } catch(error) {
    dispatch({type: ActionTypes.PRODUCT_LIST.ERROR})
  }
}

export default {
  onProductLoadItems
}
