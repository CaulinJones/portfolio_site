import React from 'react';
import { Grid, Segment, Divider, Header ,Container} from 'semantic-ui-react';


const CBottom = () => (
    <Segment>
        <Grid columns={2} width={4}>
        <Grid.Column>
            <Header> I am a Developer.</Header>
            <Container text><p>Lorum IMpasdfiasdf asd asdf  fdsasdf fsaasdf.asdf sa df.asdf</p> </Container>
        </Grid.Column>
        <Grid.Column>
            <Header> </Header>
        </Grid.Column>
        </Grid>

        <Divider vertical><b>=></b></Divider>
    </Segment>
);
export default CBottom