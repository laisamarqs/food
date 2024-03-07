import { Link } from 'react-router-dom'

import CategorytList from '../../components/view/CategoryList'
import Footer from '../../components/ui/Footer'

import { HeaderContainer } from './styles'
import { Logo } from '../../styles'

import logoImage from '../../assets/images/logo.svg'

const Home = () => (
  <>
    <HeaderContainer>
      <h1>
        <Link to="/" title="Home">
          <Logo src={logoImage} alt="EFOOD" />
        </Link>
      </h1>
      <h2>
        Viva experiências gastronômicas
        <br />
        no conforto da sua casa
      </h2>
    </HeaderContainer>
    <main>
      <CategorytList />
    </main>
    <Footer />
  </>
)

export default Home