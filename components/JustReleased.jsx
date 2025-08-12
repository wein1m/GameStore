import Card from './Card'
import { getTrending } from './../lib/actions';
import Image from 'next/image';

const JustReleased = async () => {
  const trending = await getTrending()
  return (
    <section>
      <h1 className="section-title">Just Released</h1>
      {/* combining the scroll start on childrens and scroll-padding on parent */}
      <div className="horizontal-scroll !pb-0">

      {/* spread all items cuz it changed to 2d object when mapped :/ */}
      {trending.map((item) => (
          <Card key={item.$id} {...item} />
      ))}
      </div>
    </section>
  )
}

export default JustReleased
