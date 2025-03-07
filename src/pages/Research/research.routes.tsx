import { Suspense, lazy } from 'react'
import { AuthRoute } from '../common/AuthRoute'
import { Route, Switch, withRouter } from 'react-router-dom'
const CreateResearch = lazy(() => import('./Content/CreateResearch'))
const CreateUpdate = lazy(() => import('./Content/CreateUpdate'))
const ResearchItemEditor = lazy(() => import('./Content/EditResearch'))
const UpdateItemEditor = lazy(() => import('./Content/EditUpdate'))
const ResearchArticle = lazy(() => import('./Content/ResearchArticle'))
const ResearchList = lazy(() => import('./Content/ResearchList'))

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}

const routes = () => (
  <Suspense fallback={<div></div>}>
    <Switch>
      <Route exact path="/research" component={ResearchList} />
      <AuthRoute
        path="/research/create"
        component={CreateResearch}
        roleRequired="beta-tester"
      />
      <AuthRoute
        exact
        path="/research/:slug/new-update"
        component={CreateUpdate}
        roleRequired="beta-tester"
      />
      <AuthRoute
        exact
        path="/research/:slug/edit"
        component={ResearchItemEditor}
        roleRequired="beta-tester"
      />
      <AuthRoute
        exact
        path="/research/:slug/edit-update/:update"
        component={UpdateItemEditor}
        roleRequired="beta-tester"
      />
      <Route
        path="/research/:slug"
        exact
        key={getRandomInt(55555)}
        component={ResearchArticle}
      />
    </Switch>
  </Suspense>
)

export default withRouter(routes)
