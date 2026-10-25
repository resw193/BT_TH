import React, { useCallback, useEffect, useState } from "react";
import type { Phone } from "../types";
import { fetchPhone } from "../api/phoneApi";
import { Loading } from "../components/Loading";
import { ErrorBox } from "../components/ErrorBox";
import { SelectPhoneApp } from "./SelectPhoneApp";

export function SelectPhoneApi() {
  const [phone, setPhone] = useState<Phone | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    // Bài 2 - TODO 1: xóa kết quả cũ, lỗi cũ mỗi lần tải lại.
    setError(null);
    setPhone(null);
    // Bài 2 - TODO 2: thử fetch và bắt lỗi.
    try {
      setPhone(await fetchPhone("1"));
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Đã có lỗi không xác định xảy ra.");
    }
  }, []);

  // Bài 2 - TODO 3: fetch lần đầu khi component được mount.
  useEffect(() => { void load(); }, [load]);
  // Bài 2 - TODO 4: lỗi + nút thử lại.
  if (error !== null) return <ErrorBox message={error} onRetry={() => { void load(); }} />;
  // Bài 2 - TODO 5: spinner trong khi chờ.
  if (phone === null) return <Loading />;
  // Bài 2 - TODO 6: dùng lại giao diện và điều hướng Bài 1.
  return <SelectPhoneApp phone={phone} />;
}
