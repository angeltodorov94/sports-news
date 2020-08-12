import React, { Component } from 'react'
import styled from 'styled-components'
import PageLayout from '../PageLayout'
import ErrorMessage from '../../components/errorMessages/Error'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import LikedPages from './LikedPages/LikedPages'
import Security from './SecurityPanel/Security'
import Loading from '../../components/loading/Loading'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class ProfilePage extends Component {
    constructor(props) {
        super(props)
        this.url = this.props.match.url

        this.state = {

        }
    }

    componentDidMount() {
        this.props.getUserInformation(this.props.userId)
        this.props.history.push(this.url + "/info")
    }

    render() {
        if (this.props.loading)
            return (<PageLayout>
                <Loading />
            </PageLayout>)

        return (
            <PageLayout>
                {this.props.error ? <ErrorMessage error={this.props.error} /> : null}
                <Container1>
                    <InnerContainer>
                        <Switch>
                            <Route path={this.url + "/info"} exact render={(props) => <ProfileInfo {...props} data={this.props.userDetails} />} />
                            <Route path={this.url + "/likedPages"} exact render={(props) => <LikedPages {...props} data={this.props.userDetails} />} />
                            <Route path={this.url + "/security"} component={Security} />
                            <Redirect path={this.url + "/"} exact to={this.url + "/info"} />
                        </Switch>
                    </InnerContainer>
                </Container1>
            </PageLayout>
        )
    }
}

const Container1 = styled.div`
    display: flex;
    justify-content: space-between;
`
const InnerContainer = styled.div`
    width: 66%;
`

const mapStateToProps = state => {
    return {
        userId: state.auth.id,
        userDetails: state.user.userDetails,
        error: state.user.error,
        loading: state.user.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserInformation: (id) => dispatch(actions.getUserInformation(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)