import { Homepage } from './components/Sections';
import { Features } from './components/Sections';

export default function Home() {
    return (
        <>
            <Homepage />
            <Features />
            {/* <Section reverse={false} title='EVENTS' body={<Fragment><div className='text-center'>Waka Daiko has proudly performed live at:</div><div className='text-center'><ul className='inline-block list-disc list-inside text-start mt-5'><li><Small body='Autzen Stadium' /></li><li><Small body='Hult Center' /></li><li><Small body='Lane Community College' /></li><li><Small body='Asian Celebration' /></li> <li><Small body='Obon Festival' /></li> <li><Small body='Kite Festival' /></li> <li><small>And many; many, more places...</small></li></ul></div></Fragment>} imageSrc='/scene.jpg' imageAlt='Waka Daiko performances' c={'text-start'} />
            <Section reverse={true} title='TEAM' body={<Fragment>Waka Daiko is a fun, diverse, Taiko drumming group, that encourages <Small body='team building' /> and <Small body='mentorships' />. Any youth - <Small body='ages 8 through college' />, are welcome to apply to join Waka Daiko.</Fragment>} imageSrc='/team.jpg' imageAlt='Waka Daiko team' />
            <Section reverse={false} title='TRAINING' body={<Fragment>Waka Daiko currently practices at the school, <Small body='Willamette Leadership Academy' />, which resides in Oregon&apos;s <Small body='Lane County' /> area. Our awesome instructors and mentors teach every Wednesday <Small body='(excluding holidays and vacation days)' /> at <Small body='5:00pm - 8:00pm (GMT - 8)' />.</Fragment>} imageSrc='/Untitled.png' imageAlt='Waka Daiko training ground' />
            <Section reverse={true} title='CULTURE' body='N/A' imageSrc='data:image/png;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs' imageAlt='Waka Daiko culture' />
            <Section reverse={false} title='COMMUNITY' body='N/A' imageSrc='data:image/png;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs' imageAlt='Waka Daiko community' /> */}
        </>
    );
}
