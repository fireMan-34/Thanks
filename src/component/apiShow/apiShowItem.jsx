import { simpeSpan } from '../simpeSpan';
const style = { display: 'inline-block', textAlign: "center", width: '10em', height: "3em", lineHeight: "3em" };
const currySimpeSpan = (str) => simpeSpan(str, style);
export const ApiShowItem = ({ name, stargazers_count, forks_count, index }) => {
    return <li>
        {index}
        {currySimpeSpan(name)}-ζΆθ-{currySimpeSpan(stargazers_count)}-εζ―-{currySimpeSpan(forks_count)}
    </li>
}