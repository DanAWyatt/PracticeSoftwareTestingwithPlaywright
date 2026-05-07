import { APIRequestContext, expect } from '@playwright/test';

export type ApiCallResult = {
  status: number;
  durationMs: number;
  ok: boolean;
  json?: unknown;
};

export async function apiGet(
  request: APIRequestContext,
  url: string,
  timeoutMs = 15000
): Promise<ApiCallResult> {
  const started = Date.now();
  const response = await request.get(url, { timeout: timeoutMs });
  const durationMs = Date.now() - started;

  let json: unknown;
  try {
    json = await response.json();
  } catch {
    json = undefined;
  }

  return {
    status: response.status(),
    durationMs,
    ok: response.ok(),
    json,
  };
}

export async function apiPost(
  request: APIRequestContext,
  url: string,
  data: unknown,
  timeoutMs = 15000
): Promise<ApiCallResult> {
  const started = Date.now();
  const response = await request.post(url, {
    data,
    timeout: timeoutMs,
  });
  const durationMs = Date.now() - started;

  let json: unknown;
  try {
    json = await response.json();
  } catch {
    json = undefined;
  }

  return {
    status: response.status(),
    durationMs,
    ok: response.ok(),
    json,
  };
}

export function assertObject(value: unknown): asserts value is Record<string, unknown> {
  expect(value).toBeTruthy();
  expect(typeof value).toBe('object');
  expect(Array.isArray(value)).toBeFalsy();
}
