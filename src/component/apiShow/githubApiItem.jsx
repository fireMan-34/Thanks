export const GitHubApiItem = ({name,stars,forks}) => {
    return <li>
        {name} -* {stars} - ×{forks}
    </li>
}