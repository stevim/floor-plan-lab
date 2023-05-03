import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bedroom from './Bedroom'
import Bath from './Bath'


const FloorPlan = () => {
  return (
    <div id="plan">
      <div id="planLeft">
        <Bedroom bedNum="1"/>
        <Bath size="Full"/>
        <Bedroom bedNum="2"/>
      </div>
      <div id="planRight">
        <div id="planTR">
          <LivingRoom />
          <Kitchen />
        </div>
        <div id="planBR">
          <Bath size="Half"/>
          <Bedroom bedNum="3"/>
        </div>
      </div>
    </div>
  )
}

export default FloorPlan