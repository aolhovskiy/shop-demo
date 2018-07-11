import {connect} from 'react-redux'

import {Root as RootComp} from '../App/Root'

const root = (state) => ({
  locale: state.locale
})

const Root = connect(root)(RootComp)
export {Root}
