import { describe, expect, it } from "vitest";
import { useTemplateClassList } from '../templateClassList';

describe("templateClassList.ts", () => {
  it("contains base class", () => {
    const testClassName = "test-class";
    const { classList } = useTemplateClassList([testClassName]);
    expect(classList.value.length).toBe(1);
    expect(classList.value).toContain(testClassName);
    const { classList: classList2 } = useTemplateClassList();
    expect(classList2.value.length).toBe(0);
  });
  it("contains base class and extra class", () => {
    const testClassName = "test-class";
    const extraClassName = "extra-class";
    const { classList } = useTemplateClassList([testClassName]);
    classList.value = ["", extraClassName];
    expect(classList.value.length).toBe(2);
    expect(classList.value).contains(testClassName, extraClassName);
  });
  it("only contains extra class", () => {
    const testClassName = "test-class";
    const extraClassName = "extra-class";
    const { classList } = useTemplateClassList([testClassName]);
    classList.value = [extraClassName];
    expect(classList.value.length).toBe(1);
    expect(classList.value).contain(extraClassName);
    expect(classList.value).not.contain(testClassName);
    const { classList: classList2 } = useTemplateClassList();
    classList2.value = [];
    expect(classList2.value.length).toBe(0);
    expect(classList2.value).toStrictEqual([]);
  });
});
