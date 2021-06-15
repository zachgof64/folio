import React, {Component} from 'react';

export interface SectionProps {
   className?: string | undefined
}

export interface SectionState {

}

class Section extends Component<SectionProps, SectionState> {
  render() {
    return (
      <section className={this.props.className}>
        {this.props.children}
      </section>
    );
  }
}

export default Section;
