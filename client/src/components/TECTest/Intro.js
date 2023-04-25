import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const emaimscrum = () => {
  let p2 = 'msu.edupsy';
  p2 += '@';
  p2 += 'gmail.com';
  return p2;
};

export const Intro = () => (
  <Container text textAlign='justified' style={{ marginTop: '50px' }}>
    <Header as='h2'>Приветствуем!</Header>
    <p>
      Просим Вас принять участие в исследовании развития детей дошкольного
      возраста, которое проводится психологами МГУ имени М.В.Ломоносова.
      Результаты даннного исследования позволят получить информацию о факторах,
      которые влияют на развитие детей и в дальнейшем создать наилучшие условия
      для воспитания и обучения.
    </p>
    <p>Чтобы принять участие в исследовании нужно:</p>

    <List bulleted>
      <List.Item>
        пройти простую процедуру <Link to='/signup'>регистрации</Link> на этом
        сайте и указать информацию о ребенке (фамилия и имя, дата рождения,
        регион проживания, детский сад/школа);
      </List.Item>
      <List.Item>
        открыть на главной странице с планшета или компьютера интерактивный
        опросник об эмоциях ("Тест на понимание эмоций»);
      </List.Item>
      <List.Item>
        дать ребенку выполнить все задания самостоятельно без помощи взрослых и
        сверстников;
      </List.Item>
      <List.Item>
        оказать ребенку минимальную техническую помощь, если она потребуется;
      </List.Item>
    </List>

    <h3>Контактная информация:</h3>
    <p>
      Кафедра психологии образования и педагогики факультета психологии МГУ
      имени М.В.Ломоносова: {emaimscrum()}
    </p>
  </Container>
);