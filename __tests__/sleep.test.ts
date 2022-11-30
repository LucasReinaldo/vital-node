import { VitalClient } from "..";
import { testEUClient, testUSClient, getUserId } from "./arrange";

describe('Sleep', () => {
    it.each([
        ["eu_api_key", testEUClient],
        ["us_api_key", testUSClient],
    ])('should return sleep data %p', async (region: string, client: VitalClient) => {
        const userId = await getUserId(client)
        const data = await client.Sleep.get(
            userId,
            new Date("2021-01-01"),
            new Date("2022-01-02"),
        )
        expect(data.sleep.length).toBeGreaterThan(0)
    });

    it.each([
        ["eu_api_key", testEUClient],
        ["us_api_key", testUSClient],
    ])('should return sleep stream data %p', async (region: string, client: VitalClient) => {
        const userId = await getUserId(client)
        const data = await client.Sleep.getSleepWithStream(
            userId,
            new Date("2021-09-10"),
            new Date("2021-10-10"),
        )
        expect(data.sleep.length).toBeGreaterThan(0)
        expect(data.sleep[0].sleep_stream).toBeDefined()
    });
})
