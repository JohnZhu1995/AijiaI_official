// import fetchApi from "../lib/strapi";
// import type Report from "../interfaces/report";
import { describe, expect, it, vi } from "vitest";

describe("fetchApi", () => {
    // it("should return an object with a data property which is an array", async () => {
    //     const mockResponse = {
    //         data: [
    //             /* your test data here */
    //         ],
    //     };
    //     // Mock the fetch function to return the desired response
    //     global.fetch = vi.fn().mockResolvedValue({
    //         json: vi.fn().mockResolvedValue(mockResponse),
    //     });
    //     // Call the fetchApi function
    //     const result = (await fetchApi({
    //         endpoint: "exampleEndpoint",
    //         // other props...
    //     })) as { data: unknown[] }; // Use type assertion
    //     // Assertions
    //     expect(global.fetch).toHaveBeenCalledWith(
    //         expect.stringContaining("/api/exampleEndpoint"),
    //         expect.objectContaining({
    //             headers: expect.objectContaining({
    //                 Authorization: expect.stringContaining("Bearer"),
    //             }),
    //         })
    //     );
    //     // Test that the result has a data property which is an array
    //     expect(result).toHaveProperty("data");
    //     expect(Array.isArray(result!.data)).toBe(true);
    // });
});
