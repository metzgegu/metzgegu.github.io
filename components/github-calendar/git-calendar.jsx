import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import styles from './git-calendar.module.css';

export default function GitCalendarComponent({ gitContribution }) {
    const values = gitContribution.values
    const moy = gitContribution.moy
    const max = gitContribution.max

    return (
        <div className={styles.calendar}>
            <h2>GitHub/GitLab contributions :</h2>
            <CalendarHeatmap
                startDate={values[0]?.date}
                endDate={values[values.length - 1]?.date}
                values={values}
                titleForValue={(value) => {
                    if (!value || !value.date) return null
                    return `${value.date}: ${value.count} contributions`
                }}
                classForValue={(value) => {
                    if (!value) return 'color-empty'
                    if (value.count === 0) return 'color-github-0'
                    if (value.count > moy) {
                        return value.count > (max - moy) / 2 ? 'color-github-4' : 'color-github-3'
                    }
                    return value.count > moy / 2 ? 'color-github-2' : 'color-github-1'
                }}
            />
        </div>
    );
}
