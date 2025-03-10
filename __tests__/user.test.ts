import { VitalClient } from "..";
import { testEUClient, testUSClient, getUserId, randomString, test_user_id } from "./arrange";

describe('User', () => {
    const user_id = randomString(10);
    it.each([
        ["eu_api_key", testEUClient],
        ["us_api_key", testUSClient],
    ])('should create a user %p', async (region: string, client: VitalClient) => {
        const user = await client.User.create(
            user_id,
        )
        expect(user.client_user_id).toBe(user_id)
    });

    it.each([
        testEUClient,
        testUSClient,
    ])('should find a user', async (client: VitalClient) => {
        const user = await client.User.resolve(
            test_user_id,
        )
        expect(user.client_user_id).toBe(test_user_id)
    });

    it.each([
        testEUClient,
        testUSClient,
    ])('should delete a user', async (client: VitalClient) => {
        const userToDelete = await getUserId(client, user_id);
        const user = await client.User.delete(
            userToDelete,
        )
        expect(user.success).toBe(true)
    });

})
