import React from 'react';
import {Grid, Reveal, Card} from 'semantic-ui-react';


const RevealExampleMoveDown = () => (
    <Reveal animated='move down'>
      <Reveal.Content visible>
        <Card>
        <Card.Content>
            <Card.Header>Matthew Harris</Card.Header>
            <Card.Meta>Co-Worker</Card.Meta>
            <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
        </Card.Content> 
        </Card>
      </Reveal.Content>
      <Reveal.Content hidden>
      <Card>
        <Card.Content>
            <Card.Header>Matthew Harris</Card.Header>
            <Card.Meta>Co-Worker</Card.Meta>
            <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
        </Card.Content>
        </Card>
      </Reveal.Content>
    </Reveal>
);

const CMid = () => (

<Grid width={4}>
    <RevealExampleMoveDown />
</Grid>

);

export default CMid