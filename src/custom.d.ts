/* eslint-disable @typescript-eslint/no-unused-vars */
import { Profile as DiscordProfile } from 'passport-discord'
import { Profile as GoogleProfile } from 'passport-google-oauth'

declare global {
  namespace Express {
    export interface Session {
      inGuild: boolean
      updatedNickname: boolean
      classes: string[]
      status: 'student' | 'alumnus' | 'teacher'
    }
    export interface User {
      google: GoogleProfile
      discord: DiscordProfile
    }
  }
}

export interface RedisClass {
  channel: string
  subject: string
  course: string
  section: string
  title: string
  instructor: string
  enrolment: number
  sessionCode: string
}
