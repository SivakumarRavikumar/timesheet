jest.setTimeout(30000); // 30 seconds timeout

const request = require('supertest');
const app = require('../app');
const TimeEntry = require('../models/TimeEntry');

describe('Timesheet API', () => {
  it('should create a new time entry', async () => {
    const res = await request(app)
      .post('/api/time-entry')
      .send({
        userId: 'user123',
        date: '2024-06-12T00:00:00Z',
        hours: 8,
        description: 'Worked on project A',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  it('should retrieve time entries', async () => {
    await TimeEntry.create({
      userId: 'user123',
      date: '2024-06-12T00:00:00Z',
      hours: 8,
      description: 'Worked on project A',
    });

    const res = await request(app).get('/api/time-entry/user123');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBe(1);
  });

  it('should calculate available capacity for week', async () => {
    await TimeEntry.create({
      userId: 'user123',
      date: '2024-06-12T00:00:00Z',
      hours: 8,
      description: 'Worked on project A',
    });

    const res = await request(app).get('/api/capacity/user123/week');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('capacityHours');
    expect(res.body.capacityHours).toBe(32); // Assuming a 40-hour work week
  });
});
