import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo'

const general = {
    ...TodoActionCreators,
    ...UserActionCreators
}

export default general;