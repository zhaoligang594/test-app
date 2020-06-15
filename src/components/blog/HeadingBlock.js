import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {Row} from 'antd'
import cls from "classnames";
import Heading from "./Heading";
import './HeadingBlock.css'
import store from './../../store/store'

class HeadingBlock extends PureComponent {
  renderHtml = () => {
    const { level, children } = this.props;

    

    if (children && children.length > 0) {
      
      const nodeValue = children[0].props.value;

      const _state=store.getState();

      let articleTitles=_state.articleTitles;
  
      articleTitles.push({title:nodeValue,level:level});

      store.setState({
        articleTitles:articleTitles
      })

      //console.log(articleTitles)


      return (
        <Row style={{clear:"both",width:"100%"}}>
          <Heading level={`h${level}`} value={nodeValue} 
          // id={nodeValue}
          >
                    <span className="heading-title">{children}</span>
                      <a href={`#${nodeValue}`} className="link">
                      #
                    </a>
          </Heading>
        </Row>
      );
    } else {
      return <>{children}</>;
    }
  };
  render() {
    return <>{this.renderHtml()}</>;
  }
}

export default HeadingBlock;