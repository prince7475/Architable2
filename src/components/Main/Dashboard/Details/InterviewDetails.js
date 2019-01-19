import React, { Component } from "react";
import { Container, Grid, Image, Button, Icon, Label } from "semantic-ui-react";
import faker from "faker";
export default class InterviewDetails extends Component {
  render() {
    return (
      <Container text className="overflow ">
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src={faker.internet.avatar()} circular />
            </Grid.Column>
            <Grid.Column width={13}>
              <h2 className="interviewer-title">
                Architectural Coordinator Interview
              </h2>
              <h4 className="white space-text-go-up-1-percent">
                Melissa in Dallas, Texas
              </h4>
              <p className="grey space-text-go-up-1-percent">7 days ago</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <h4 className="grey ">Experience Level</h4>
              <h4 className="white space-text-go-up-1-percent">
                No Experience
              </h4>
            </Grid.Column>
            <Grid.Column>
              <h4 className="grey">Firm size</h4>
              <h4 className="white space-text-go-up-1-percent">10-50</h4>
            </Grid.Column>
            <Grid.Column>
              <h4 className="grey">Salary Offered</h4>
              <h4 className="white space-text-go-up-1-percent">$ 24,000</h4>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <div className="details-text-space-top-10-percent">
          <h4 className="grey">Background Story</h4>
          <h4 className="white space-text-go-up-1-percent">
            Background Story Reviewing of my resume and school documentation of
            past work led to the interview CSS
          </h4>
        </div>

        <div className="details-text-space-top-5-percent">
          <h4 className="grey">Experience During Interview</h4>
          <h4 className="white space-text-go-up-1-percent">
            The interview lasted about 30-45 minutes. I was only interviewed
            once, the business partner did come in later to review my portfolio
            and other documentation. Some questions that were asked: what’s my
            strengths and weaknesses? My compensation, experience level, would I
            be willing to go outside my comfort zone, personal lifestyle,
            college experience.
          </h4>
        </div>

        <div className="details-text-space-top-5-percent">
          <h4 className="grey">Lessons Learned</h4>
          <h4 className="white space-text-go-up-1-percent">
            Before the interview I wish I would have been more knowledgeable
            about the company.
          </h4>
        </div>

        <div className="details-text-space-top-5-percent">
          <h4 className="grey">Qualifications</h4>
          <h4 className="white space-text-go-up-1-percent">
            Non-Professional Degree (BS)
          </h4>
        </div>

        <div className="details-text-space-top-5-percent">
          <h4 className="grey">University</h4>
          <h4 className="white space-text-go-up-1-percent">
            University of Lousiana at Lafayette, Lafayette Louisiana
          </h4>
        </div>

        <div className="details-text-space-top-5-percent">
          <h4 className="white">Did you find this interview helpful?</h4>

          <Button as="div" labelPosition="right">
            <Button icon>
              <Icon name="thumbs up" />
              Like
            </Button>
            <Label as="a" basic pointing="left">
              2,048
            </Label>
          </Button>

          <Button as="div" labelPosition="right">
            <Button icon>
              <Icon name="thumbs down" />
              Dislike
            </Button>
            <Label as="a" basic pointing="left">
              2,048
            </Label>
          </Button>
        </div>
      </Container>
    );
  }
}
