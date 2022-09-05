import React, { ReactElement } from 'react';

type FallbackRender = (props: { error: Error | null }) => ReactElement;
// P S
class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    if (error !== null) {
      const { fallbackRender } = this.props;
      if (fallbackRender) {
        return fallbackRender({ error });
      }
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
