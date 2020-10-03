import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Message, Form, Input } from 'semantic-ui-react';
import { QuestionProps } from '../types/questionTypes';

class Question extends PureComponent<QuestionProps> {
  componentDidMount() {
    const { onDidMount, match } = this.props;
    onDidMount({ id: match.params.id });
  }

  componentWillUnmount() {
    const { onWillUnmount } = this.props;
    onWillUnmount();
  }

  render() {
    const { question, correct, wrong, onChange, onSubmit } = this.props;
    return (
      <Container text>
        {question && (
          <Form success={correct} error={wrong} onSubmit={onSubmit}>
            <Form.Field>
              <div dangerouslySetInnerHTML={{ __html: question.content }} />
              <Input
                name="answer"
                onChange={onChange}
                placeholder="Answer here"
              />
            </Form.Field>
            <Button type="submit">Submit</Button>
            <Button as={Link} to="/">
              Back to home
            </Button>

            <Message
              success
              header="Correct!"
              content="Well done, challenger!"
            />
            <Message
              error
              header="Incorrect..."
              content="Try another answer!"
            />
          </Form>
        )}
      </Container>
    );
  }
}

export default Question;
