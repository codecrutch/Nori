import React from 'react';
import { withRouter } from 'react-router-dom';

class BusinessForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      address: "",
      phone: "",
      hours: "",
      price_rating: "0",
      website_url: "",
      business_img_url: "",
      business_image: null,
      mon: "6am-10pm",
      tues: "6am-10pm",
      wed: "6am-10pm",
      thurs: "6am-10pm",
      fri: "6am-10pm",
      sat: "6am-10pm",
      sun: "6am-10pm"
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.convertHoursToString = this.convertHoursToString.bind(this);
  }

  componentDidMount() {
    let businessId = this.props.match.params.businessId;

    if (businessId) {
      this.props.getBusiness(businessId);
    }
  }

  componentWillReceiveProps(newProps) {
    let oldBusinessId = this.props.match.params.businessId;
    let newBusinessId = newProps.match.params.businessId;

    if (this.props.location.pathname !== '/business/new'){
      if (oldBusinessId !== newBusinessId) {
        this.props.getBusiness(newBusinessId);
      }
    }
  }

  updateFile(e){
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function(){
      this.setState({ business_image: file, business_img_url: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let formEl = document.getElementById("form");
    let formData = new FormData();
    formData.append("business[name]", this.state.name);
    formData.append("business[phone]", this.state.phone);
    formData.append("business[hours]", this.convertHoursToString());
    formData.append("business[price_rating]", this.state.price_rating);
    formData.append("business[website_url]", this.state.website_url);

    if (this.state.business_image === null) {
      this.props.displayError("Image missing", "Please select a profile image.");
    } else {
      formData.append("business[business_image]", this.state.business_image);

      this.props.getLatitudeAndLongitude(this.state.address).then(
        (res) => {
          if (res.status === 'ZERO_RESULTS') {
            this.props.displayError("Couldn't Find Address", "Provide a valid address");
          } else {
            let geolocation = res.results[0];
            //grabout lat and long and put into business
            formData.append("business[address]", geolocation.formatted_address);
            formData.append("business[lat]", geolocation.geometry.location.lat)
            formData.append("business[lng]", geolocation.geometry.location.lng)

            this.props.processForm(formData).then(
              (e) => this.props.history.replace("/")
            );
          }
        },
        (err) => this.props.displayError("Address Missing", "ex. 159 W. 25th St, Manhattan NY")
      )
    }
  }

  convertHoursToString() {
    let {mon,tues,wed,thurs,fri,sat,sun} = this.state
    let hourString = `Mon: ${mon}| Tue: ${tues}| Wed: ${wed}| Thu: ${thurs}| Fri: ${fri}| Sat: ${sat}| Sun: ${sun}|`
    return hourString;
  }

  handleInput(event, field){
    let value = event.currentTarget.value;
    this.setState({ [field]: value });
  }

  render(){
    let hoursPlaceholder = "ex. 6:00am - 5:45pm";
    let imageOuput;
    if (this.state.business_img_url) {
      imageOuput = <img src={this.state.business_img_url} style={{ width: '90px', height: '90px', borderRadius: '5px', marginBottom: '10px'}}/>
    } else {
      imageOuput = null;
    }
    
      return(
      <section className='business-form-layout container'>
        <section id="form" className='business-form-container row'>
          <div className="form-left col-med-12 col-lg-12 text-center">
            <img src="https://s3.us-east-2.amazonaws.com/noriapp-prod/static/sushi-two.png" className="business-form-image"></img>
          </div>

            <form className="business-new-form" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="form-right col-sm-6 col-md-6 col-lg-6 text-center">
            <p className='business-form-header'><span>{this.props.formTitle}</span></p>
              <input className="business-form-name" placeholder="Business Name" onChange={(e) => this.handleInput(e, "name")} type='text' />
              <br />
              <input className="business-form-address" placeholder="Address" onChange={(e) => this.handleInput(e, "address")} type='text' />
              <br />
              <input className="business-form-website-url" placeholder="Website URL" onChange={(e) => this.handleInput(e, "website_url")} type='text' />
              <br />
              {imageOuput}
              <br />
              <input className="business-form-business-img-url inputfile" name="file" id="file" placeholder="Business Image" onChange={(e) => this.updateFile(e)} type='file' />
              <label htmlFor="file">Choose a profile picture</label>
              <br />
              <input className="business-form-phone" placeholder="Phone Number" onChange={(e) => this.handleInput(e, "phone")} type='text' />
              <br />

              <span>Average Meal Price</span>
              <br />

              <label>$
                <input className="business-form-price-rating"
                  placeholder="Average Price"
                  onChange={(e) => this.handleInput(e, "price_rating")}
                  type='radio'
                  name="price_rating"
                  value={ 0 }
                  defaultChecked
                />
              </label>

              <label>$$
                <input className="business-form-price-rating"
                  placeholder="Average Price"
                  onChange={(e) => this.handleInput(e, "price_rating")}
                  type='radio'
                  name="price_rating"
                  value={ 1 } />
              </label>

              <label>$$$
                <input className="business-form-price-rating"
                  placeholder="Average Price"
                  onChange={(e) => this.handleInput(e, "price_rating")}
                  type='radio'
                  name="price_rating"
                  value={ 2 } />
              </label>

              <label>$$$$
                <input className="business-form-price-rating"
                  placeholder="Average Price"
                  onChange={(e) => this.handleInput(e, "price_rating")}
                  type='radio'
                  name="price_rating"
                  value={ 3 } />
              </label>

              <label>$$$$$
                <input className="business-form-price-rating"
                  placeholder="Average Price"
                  onChange={(e) => this.handleInput(e, "price_rating")}
                  type='radio'
                  name="price_rating"
                  value={ 4 } />
              </label>
              </div>


              <br />

              <section id="hours" className="col-sm-6 col-med-6 col-lg-6 text-center">
                <span>Hours of Operation</span>
                <br />
                <label>Monday
                <br />
                <input className="mon" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "mon")} type='text' value={this.state.mon} />
                </label>
                <br />
                <label>Tuesday
                <br />
                <input className="tues" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "tues")} type='text' value={this.state.tues} />
                </label>
                <br />
                <label>Wednesday
                <br />
                <input className="wed" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "wed")} type='text' value={this.state.wed} />
                </label>
                <br />
                <label>Thursday
                <br />
                <input className="thurs" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "thurs")} type='text' value={this.state.thurs} />
                </label>
                <br />
                <label>Friday
                <br />
                <input className="fri" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "fri")} type='text' value={this.state.fri} />
                </label>
                <br />
                <label>Saturday
                <br />
                <input className="sat" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "sat")} type='text' value={this.state.sat} />
                </label>
                <br />
                <label>Sunday
                <br />
                <input className="sun" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "sun")} type='text' value={this.state.sun} />
                </label>
                <br />
                <input id="business-form-submit" className="btn btn-large btn-warning" type="submit" value={this.props.formTitle} />
              </section>
              <br />

            </form>
        </section>
      </section>
    );
  }
}

export default withRouter(BusinessForm);
