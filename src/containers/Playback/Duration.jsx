import { format } from '../../utils';

export default function Duration ({ className, seconds }) {
    return (
      <time dateTime={`P${Math.round(seconds)}S`} className={className}>
        {format(seconds)}
      </time>
    );
}