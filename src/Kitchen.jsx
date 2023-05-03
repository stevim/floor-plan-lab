import Oven from './Oven'
import Sink from './Sink'

const Kitchen = () => {
  return(
    <div>
      <div id="kitchenCounter">
        <Oven />
        <Sink />
      </div>
      <div>
        Kitchen
      </div>
    </div>
  )
}

export default Kitchen