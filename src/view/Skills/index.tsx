import React from 'react';
import {
    SiTypescript,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiAmazonaws,
    SiMongodb,
    SiNextdotjs,
    SiExpress,
    SiGit,
    SiJest,
    SiCypress,
    SiMicrosoftazure,
    SiGooglecloud,
    SiDocker,
    SiRedis
} from "react-icons/si";
import Skill, { SkillProps } from 'components/Skill'
import Template from 'template'
import * as S from './styles';

const Skills: React.FC = () => {

    const skills: SkillProps[] = [
        {
            text: 'Typescript',
            icon: SiTypescript
        },
        {
            text: 'Javascript',
            icon: SiJavascript
        },
        {
            text: 'React.js',
            icon: SiReact
        },
        {
            text: 'Node.js',
            icon: SiNodedotjs
        },
        {
            text: 'AWS',
            icon: SiAmazonaws
        },
        {
            text: 'Mongodb',
            icon: SiMongodb
        },
        {
            text: 'Next.js',
            icon: SiNextdotjs
        },
        {
            text: 'Express.js',
            icon: SiExpress
        },
        {
            text: 'Git',
            icon: SiGit
        },
        {
            text: 'Jest',
            icon: SiJest
        },
        {
            text: 'Cypress',
            icon: SiCypress
        },
        {
            text: 'Azure',
            icon: SiMicrosoftazure
        },
        {
            text: 'GPC',
            icon: SiGooglecloud
        },
        {
            text: 'Docker',
            icon: SiDocker
        },
        {
            text: 'Redis',
            icon: SiRedis
        },
        {
            text: 'React Native',
            icon: SiReact
        },

    ]

    return (
        <Template>
            <S.Container>
                {skills.map((item, index) => (
                    <S.SkillItem key={index}>
                        <Skill
                            text={item.text}
                            icon={item.icon}
                        />
                    </S.SkillItem>
                ))}
            </S.Container>
        </Template>
    );
}

export default Skills;