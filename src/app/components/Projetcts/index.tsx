import CardProjects from '../CardProject'
import emBreve from '@/assets/breve.png'
import escolaReal from '@/assets/escola-real.png'
import redeSocial from '@/assets/rede-social.png'
import CardProjectContainer from '../CardProjectContainer'
import sanatanProject from '@/assets/sanatan-project.png'
import Title from '../Title'

const Projects = () => {
  return (
    <section
      id="projects"
      className="container overflow-hidden bg-primary py-10"
    >
      <Title text="Projects" />

      <CardProjectContainer>
        <CardProjects
          src={sanatanProject}
          href="#"
          description="Website"
          tittle="Sanatan Express Private Limited"
        />

        {/* <CardProjects
          src={redeSocial}
          href="#"
          description="Website"
          tittle="Rede Social"
          side={true}
        />
      </CardProjectContainer>

      <CardProjectContainer>
        <CardProjects
          src={escolaReal}
          href="#"
          description="Website"
          tittle="Escola do Real"
        />

        <CardProjects
          src={emBreve}
          href="#"
          description="Website"
          tittle="Em breve"
          side={true}
        /> */}
      </CardProjectContainer>
    </section>
  )
}

export default Projects
