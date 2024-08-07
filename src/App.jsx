import { Button, Container, ContainerInputs, Form, Input, InputLabel, Title, TopBackground } from './styles.js'

import UserImage from ''

function Home() {
  const myText = 'ASDASDUNAIUDNIAU'

  return (

    <Container>
      <TopBackground>
        <img src="" alt="" />
      </TopBackground>

      <Form>
        <Title> Cadastrar Usuários </Title>

        <ContainerInputs>
          <div>
            <div>
              <InputLabel>
                Nome<span>*</span>
              </InputLabel>
              <Input type='text' placeholder='Nome do usuario' />
            </div>
            <div>
              <InputLabel>
                Idade<span>*</span>
              </InputLabel>
              <Input type='text' placeholder='Idade do usuario' />
            </div>
            <div>
              <InputLabel>
                Email<span>*</span>
              </InputLabel>
              <Input type='text' placeholder='Email do usuario' />
            </div>

          </div>
        </ContainerInputs>

        <Button>Cadastrar usuario</Button>


      </Form>

    </Container>

  )
}

export default Home
