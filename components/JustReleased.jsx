import Card from './Card'
import { getTrending } from './../lib/actions';

const JustReleased = async () => {
  const trending = await getTrending()
  return (
    <section>
      <h1 className="section-title">Just Released</h1>
      <div className="flex flex-row justify-between gap-5 ">

      {/* spread all items cuz it changed to 2d object when mapped :/ */}
      {trending.map((item) => (
          <Card key={item.$id} {...item} />
      ))}
      </div>
    </section>
  )
}

export default JustReleased
