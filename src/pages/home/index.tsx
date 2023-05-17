// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Card, CardHeader, CardBody, CardFooter, Stack as StackChakra, Image, Heading, Text as TextChakra, Button as ButtonChakra } from "@chakra-ui/react"


// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "./style";

//Libs Externas
import Scrollbars from "react-custom-scrollbars";
import CardProject from "@/components/CardProject";


export const Home = (): JSX.Element => {

  const url: string = "https://2-give-app.vercel.app/"

  const trackStyle = { backgroundColor: '#00adb5', width: 8, right: 0, bottom: 2, top: 2, borderRadius: 4 };

  const renderTrackVertical = () => <div style={trackStyle} className="track-vertical" />;


  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Criando experiências por meio da tecnologia{" "}
            </Text>
            <Text type="body1" color="grey6">
              Sou estudante de programação na Kenzie Academy Brasil, participei
              de diversos projetos resolvendo problemas de alto nível e
              desenvolvendo habilidades
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos">
                Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Tecnologias
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Ferramentas que domino
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectsAreaContent>
            <CardProject 
            imageSrc="https://i.imgur.com/hbDHV9l.png"
            imageAlt="Projeto 2 Give App"
            titleProject="2 Give App"
            descriptionProject="Aplicação Front-End desenvolvida para solucionar problemas cotidianos das instituições de caridade. A aplicação tem como objetivo principal fazer uma ponte entre as instituições de caridade e os doadores por meio do cadastro destas intituições e criações de campanhas para as mesmas. Dito isto, os doadores podem visualizar estas instituições, conhecer suas campanhas e realizar doações. Este projeto tem capacidade de escalabilidade com futuras atualizações por GPS e autenticações mais rígidas pelo lado do Back-End."
            linkProject="https://2-give-app.vercel.app/"
            />
            <CardProject 
            imageSrc="https://i.imgur.com/9WMvxuz.png"
            imageAlt="Projeto OneHealth"
            titleProject="OneHealth"
            descriptionProject="Uma API que permite um agendamento rápido e simplificado do paciente com o médico, que
            também serve para registrar e guardar diagnósticos médicos, armazenando de forma organizada e de
            fácil acesso os relatórios médicos. Nessa API será possível agendar consultas de acordo com a
            disponibilidade do médico cadastrado, o médico terá acesso a todo o histórico do paciente
            cadastrado, o paciente não terá que se preocupar em guardar papéis ou procurar o médico que fez
            uma consulta, a aplicação fará isso por ele."
            linkProject="https://github.com/hermlandim/OneHealth_M4"
            />
            <CardProject 
            imageSrc="https://i.imgur.com/vmz4uZm.png"
            imageAlt="Projeto Outfit Commerce"
            titleProject="Outfit Commerce"
            descriptionProject="Uma API de E-Commerce desenvolvida em Python com Django-Rest-Framework usando Generic View, Model Serializer e Postgres. A API tem o propósito principal de gerenciar um e-commerce de roupas usando banco de dados relacionais, isto é, implementação de relacionamento 1:1, 1:N e N:N entre as tabelas de usuário, endereço, produto, carrinho, pedido, lista de favoritos, avaliações, cadastro e uso de cupons etc. Conseguinte está implementado autenticação de rotas com JWT Token e acesso a rotas restritas apenas ao próprio usuário/vendedor ou administrador. O projeto tem intuito de ser escalável para implementações futuras. Além disso o projeto está em produção no Render para consumo."
            linkProject="https://github.com/hermlandim/outfit-commerce-backend"
            />
          </ProjectsAreaContent>
        </Container>
      </ProjectsArea>
    </main>
  );
};
