
import {
    AreaChart,
    Area,
    YAxis,
    XAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import { GraphHeader } from "./ScannerGraphHeader";
import useStyles from "./ScannerGraph.style";
import { IProps } from "../../../types/types";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { MINT_GREEN, SHINE_RED, SHINING_YELLOW } from "../../../helpers/colorsConstant";


export const ScannersGraph = ({ scannerType, data, width, scannerName, sum, statusFilter }: IProps) => {
    const classes = useStyles();
    const navigate = useNavigate();
    let lineChart: any;
    const handleClick = (): void => {
        navigate('/more-details/' + lineChart.state.prevData[lineChart.state.activeTooltipIndex].id)
    }
    return (
        <Card className={classes.styleCard}>
            <GraphHeader scannerType={scannerType} scannerName={scannerName} sum={sum} />
            <Card.Body  onClick={handleClick}>
            <AreaChart width={data ? data.length * 150 : 0}  height={250}
                    data={data} margin={{ top: 0, right: 30, left: 5, bottom: 40 }}
                        ref={(ref) => {
                            lineChart = ref;
                        }}>
                        <defs>
                            <linearGradient id="colorPassed" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={ MINT_GREEN} stopOpacity={0.25} />
                                <stop offset="75%" stopColor={ MINT_GREEN} stopOpacity={0.005} />
                            </linearGradient>
                            <linearGradient id="colorFailed" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={ SHINE_RED }stopOpacity={0.25} />
                                <stop offset="75%" stopColor={ SHINE_RED } stopOpacity={0.005} />
                            </linearGradient>
                            <linearGradient id="colorWarnings" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={SHINING_YELLOW} stopOpacity={0.25} />
                                <stop offset="75%" stopColor={SHINING_YELLOW} stopOpacity={0.005} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="executionDate" axisLine={false} tickCount={11} domain={['auto', 'auto']}
                            tickFormatter={
                                date => {
                                    return moment(date).format('DD MMM, YYYY')
                                }
                            }                
                        />
                        <YAxis axisLine={false} tickLine={false} tickCount={8}
                        />
                        <CartesianGrid vertical={false} opacity={0.04} />
                        <Tooltip />
                        {/* content={<CustomTooltip />} */}
                        {statusFilter.Passed === true || statusFilter.All === true ?

                            <Area
                                type="monotone"
                                dataKey="numberOfSuccessfulScans"
                                stroke={ MINT_GREEN}
                                fill="url(#colorPassed)"
                                activeDot={{ onClick: () => { handleClick() } }}
                                dot={{ stroke: MINT_GREEN, strokeWidth: 4, r: 2 }} /> : <></>}
                        {statusFilter.Failed === true || statusFilter.All === true ?

                            <Area
                                color={ SHINE_RED }
                                type="monotone"
                                dataKey="numberOfRisksHigh"
                                stroke={ SHINE_RED }
                                fill="url(#colorFailed)"
                                activeDot={{ onClick: () => { handleClick() } }}
                                dot={{ stroke: SHINE_RED, strokeWidth: 4, r: 2 }} /> : <></>}
                        {statusFilter.Warning === true || statusFilter.All === true ?
                            <Area
                                color={SHINING_YELLOW}
                                type="monotone"
                                dataKey="numberOfWarnings"
                                stroke={SHINING_YELLOW}
                                fill="url(#colorWarnings)"
                                activeDot={{ onClick: () => { handleClick() } }}
                                dot={{ stroke: SHINING_YELLOW, strokeWidth: 4, r: 2 }} /> : <></>}
                    </AreaChart>
            </Card.Body>

        </Card>

    );
}

