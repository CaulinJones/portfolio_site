import React from 'react';
import { Header,  Icon, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const CHeader = () => (

<Grid columns={3} width={4}>
    <Grid.Column>
        <Header> caulin.info( Define, Design, Develop );</Header>
    </Grid.Column>
    <Grid.Column>
    </Grid.Column>
    <Grid.Column>
        <Icon size='huge' name='github square' />
        <Icon size='huge' name='linkedin square' />
        <Icon size='huge' name='instagram' />
    </Grid.Column>
</Grid>
);
export default CHeader