import React from 'react';
import styled from 'styled-components';
import {
    ActionButton,
    Button,
    ButtonGroup,
    Calendar,
    Checkbox,
    Dialog,
    DialogTrigger,
    Heading,
    Divider,
    Content,
    Text,
} from '@adobe/react-spectrum';
import {isWeekend, today} from '@internationalized/date';
import {getLocalTimeZone} from '@internationalized/date';
import {useLocale} from '@adobe/react-spectrum';
import meetingData from '../../apiData/meetingData';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { SiBuymeacoffee } from 'react-icons/si';
import { AppContext } from '../../context/AppContext';
import {v4 as uuidv4} from 'uuid';

const meetingDurations = [
    {id: uuidv4(), duration: '15', },
    {id: uuidv4(), duration: '30', },
    {id: uuidv4(), duration: '60', },
];

const MeetingButtonsContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px 0;
    border-top: thin solid #ebebeb;
    background: linear-gradient(rgba(248,248,248, 1), #ebebeb);
    ${(props) => props.theme === 'dark' && `
        background: linear-gradient(rgba(29, 29, 29, 1), #1d1d1d);
        border-top: thin solid #222;
    `};
    z-index: 999;
    display: grid;
    margin-top: 1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, auto);
    grid-gap: 1rem;

    .btn-item-wrapper {
    }
    .btn-item-wrapper:first-child {
        display: flex;
        justify-content: flex-end;
    }
    .btn-item-wrapper:last-child {

    }
    .btn-icon {
        margin-right: 0.333rem;
    }

    @media (max-width: 715px) {
        margin-top: 0.8rem;

        .btn-item-wrapper {

        }

        .btn-item-wrapper:first-child {

        }
        .btn-item-wrapper:last-child {

        }

    }
`;

const CheckboxWrapper = styled.div`
    margin-top: 0.888rem;
`;

const DurationsWrapper = styled.div`
    padding-top: 0.5em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
`;

const SelectedTextWrapper = styled.div`
    font-size: 1.333rem;
    padding: 0.333em 0;
`;

function MeetingTriggerDialog() {
    const [state] = React.useContext(AppContext);
    const [date, setDate] = React.useState(null);
    const [isRecruiter, setIsRecruiter] = React.useState(false);
    const { mainTitle } = meetingData;

    const colorMap = { light: 'black', dark: 'white' }
    let { locale } = useLocale();
    let isDateUnavailable = (date) => isWeekend(date, locale);

    const jumpToPage = (duration, callback) => {
        const { day, month, year } = date;
        const addZero = num => num <= 10 ? `0${num}` : `${num}`;
        const baseUrl = `https://calendly.com/javascript4breakfast`;
        const monthString = `${year}-${addZero(month)}`;
        const dayString = `${year}-${addZero(month)}-${day}`;
        const urlString = `${baseUrl}/${duration}min?month=${monthString}&date=${dayString}`;

        window.open(urlString, '_blank');
            setTimeout(() => {
                setIsRecruiter(false);
                setDate(null);
                callback();
        }, 500);
    };

    return (
        <DialogTrigger>
            <Button variant='secondary' staticColor={colorMap[state.colorScheme]} style="outline">
                <IoCalendarNumberOutline className='btn-icon' />
                <Text>Schedule Call</Text>
            </Button>
            {(close) => (
                <Dialog size='L'>
                    <Heading>{mainTitle}</Heading>
                    <Divider />
                    <ButtonGroup>
                        <Button variant="secondary" onPress={close}>Close</Button>
                        <Button isDisabled variant="accent" onPress={(e) => console.log('download resume =>')}>
                            Resume.pdf
                        </Button>
                    </ButtonGroup>

                    <Content>
                        <Calendar
                            value={date}
                            minValue={today(getLocalTimeZone())}
                            visibleMonths={2}
                            isDisabled={!isRecruiter}
                            aria-label="Date"
                            onChange={setDate}
                            isDateUnavailable={isDateUnavailable}
                        />
                        {date && isRecruiter && (
                            <div>
                                <SelectedTextWrapper>
                                    <Text>
                                        You've selected: {date.month.toString()}/{date.day.toString()}/{date.year.toString()}
                                    </Text>
                                </SelectedTextWrapper>
                                <DurationsWrapper>
                                    {meetingDurations.map((item) => (
                                        <ActionButton onPress={() => jumpToPage(item.duration, close)} key={item.id}>
                                            {item.duration} Minutes
                                        </ActionButton>
                                    ))}
                                </DurationsWrapper>
                            </div>
                        )}
                        <CheckboxWrapper>
                            <Checkbox isEmphasized onChange={() => setIsRecruiter(!isRecruiter)} isSelected={isRecruiter}>
                                I'm Technical Recruiter*
                            </Checkbox>
                        </CheckboxWrapper>
                    </Content>
                </Dialog>
            )}
        </DialogTrigger>
    );
}

export default function ScheduleMeeting(props) {
    const [state] = React.useContext(AppContext);
    const theme = state.colorScheme;
    const { buyMeACoffeeLink } = meetingData;

    const jumpToCoffee = () => {
        window.open(buyMeACoffeeLink, '_blank');
    };

    return (
        <MeetingButtonsContainer theme={theme}>
            <div className='btn-item-wrapper'>
                <MeetingTriggerDialog/>
            </div>
            <div className='btn-item-wrapper'>
                <Button onPress={jumpToCoffee} variant='accent'>
                    <SiBuymeacoffee className='btn-icon' />
                    <Text>Buy Me Coffee</Text>
                </Button>
            </div>
        </MeetingButtonsContainer>
    );
}