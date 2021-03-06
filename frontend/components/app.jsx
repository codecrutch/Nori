import React from 'react';
import SessionForm from './session/session_form_container';
import Header from './header/header';
import Footer from './footer/footer';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Notifications from './notifications';
import LandingPage from './home/landing_page';
import SearchResults from './search/search_result_index';
import BusinessPage from './business/business_page';
import BusinessForm from './business/business_form_container';
import BusinessEdit from './business/business_edit_index';
import ReviewPage from './reviews/review_form';
import UploadForm from './business/upload_form';
import FourZeroFour from './four_zero_four';

const App = () => (
  <div>
    <Header />
    <Notifications />
    <section id="" className="">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/uploads/:businessId(\d+)" component={UploadForm}/>
        <Route exact path="/business/:businessId(\d+)" component={BusinessPage}/>
        <Route exact path="/business/:businessId(\d+)/review" component={ReviewPage}/>
        <ProtectedRoute exact path="/business/new" component={BusinessForm} />
        <ProtectedRoute exact path="/business/:businessId/edit" component={BusinessEdit} />
        <Route exact path="/businesses" component={SearchResults} />
        <AuthRoute path="/login" component={SessionForm} />
        <AuthRoute path="/signup" component={SessionForm} />
        <Route path="*" component={FourZeroFour} />
      </Switch>
    </section>
    <Footer />
  </div>
);

export default App;
